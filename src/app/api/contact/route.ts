import { FormValidator } from '@/lib/validators/form';
import { GraphQLClient, gql } from 'graphql-request';
import { NextResponse } from 'next/server';
import { z } from 'zod';

const graphqlAPI = process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT!;

const graphcmsToken = process.env.HYGRAPH_TOKEN!;

export async function POST(request: Request) {
    try {

        const body = await request.json();

        const { name, email, phone, message } = FormValidator.parse(body);

        const data = { name, email, phone, message };

        const query = gql`
            mutation CreateClient($name:String!, $email:String!, $phone:String!, $message:String!){
                createClient(data: {name: $name, email: $email, phone: $phone, message: $message}){id}
            }
        `;

        const client = new GraphQLClient(graphqlAPI!, {
            headers: {
                Authorization: `Bearer ${graphcmsToken!}`,
            }
        });

        const result = await client.request(query, data);

        return NextResponse.json(result, { status: 200 });

    } catch (error) {
        if (error instanceof z.ZodError) {
            return new NextResponse("Invalid request data passed", { status: 400 });
        }

        return new NextResponse("Unable to send message", { status: 500 });
    }
};
