"use client";

import React from 'react';

interface MarkdownRendererProps {
    blog: any;
};

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ blog, ...rest }) => {

    const getContentFragment2 = (index: any, text: any, obj: any, type: any) => {
        let modifiedText: any = text;

        if (obj) {
            if (obj.bold) {
                modifiedText = (<b key={index}>{text}</b>)
            }
            if (obj.underline) {
                modifiedText = (<u key={index}>{text}</u>)
            }
        }

        const codeBlockText = modifiedText?.[0]?.children?.map((child: any) => child);
        console.log('codeBlockText', codeBlockText);

        // switch (type) {
        //     case 'heading-one':
        //         return (
        //             <h1 key={index} className="text-2xl lg:text-4xl font-semibold text-neutral-50 mb-8">
        //                 {modifiedText.map((item: any, i: any) =>
        //                     <React.Fragment key={i}>
        //                         {item}
        //                     </React.Fragment>
        //                 )}
        //             </h1>
        //         );
        //     case 'heading-two':
        //         return (
        //             <h2 key={index} className="text-xl lg:text-3xl font-semibold text-neutral-50 mb-6">
        //                 {modifiedText.map((item: any, i: any) =>
        //                     <React.Fragment key={i}>
        //                         {item}
        //                     </React.Fragment>
        //                 )}
        //             </h2>
        //         );
        //     case 'heading-five':
        //         return (
        //             <h5 key={index} className="text-sm lg:text-lg font-semibold text-neutral-50 mb-4">
        //                 {modifiedText.map((item: any, i: any) =>
        //                     <React.Fragment key={i}>
        //                         {item}
        //                     </React.Fragment>
        //                 )}
        //             </h5>
        //         );
        //     case 'heading-six':
        //         return (
        //             <h6 key={index} className="text-xs lg:text-base font-semibold text-neutral-50 mb-4">
        //                 {modifiedText.map((item: any, i: any) =>
        //                     <React.Fragment key={i}>
        //                         {item}
        //                     </React.Fragment>
        //                 )}
        //             </h6>
        //         );
        //     case 'list-item':
        //         return (
        //             <li key={index} className="mb-2">
        //                 {modifiedText.map((item: any, i: any) =>
        //                     <React.Fragment key={i}>
        //                         {item}
        //                     </React.Fragment>
        //                 )}
        //             </li>
        //         );
        //     case 'bulleted-list':
        //         return (
        //             <ul key={index} className="list-disc pl-4 mb-4">
        //                 {modifiedText.map((item: any, i: any) =>
        //                     <React.Fragment key={i}>
        //                         {item}
        //                     </React.Fragment>
        //                 )}
        //             </ul>
        //         );
        //     case 'blockquote':
        //         return (
        //             <blockquote key={index} className="text-neutral-200 border-l-4 border-neutral-200 pl-4 mb-4">
        //                 {modifiedText.map((item: any, i: any) =>
        //                     <React.Fragment key={i}>
        //                         {item}
        //                     </React.Fragment>
        //                 )}
        //             </blockquote>
        //         );
        //     case 'code':
        //         return (
        //             <CodeBlock key={index} language={object?.lang} code={text} />
        //         );
        //     case 'inlineCode':
        //         return (
        //             <code key={index} className="bg-neutral-800 text-neutral-50 px-2 py-1 rounded-md">
        //                 {text}
        //             </code>
        //         );
        //     case 'paragraph':
        //         return (
        //             <p key={index} className="mb-4">
        //                 {modifiedText.map((item: any, i: any) =>
        //                     <React.Fragment key={i}>
        //                         {item}
        //                     </React.Fragment>
        //                 )}
        //             </p>
        //         );
        //     case 'image':
        //         return (
        //             <img key={index} src={object?.url} alt={object?.alt} />
        //         );
        //     default:
        //         break;
        // }
        // switch (type) {
        //     case 'heading-one':
        //         modifiedText = <h1 key={index} className="text-2xl lg:text-4xl font-semibold text-neutral-50 mb-8">{text}</h1>;
        //         break;
        //     case 'heading-two':
        //         modifiedText = <h2 key={index} className="text-xl lg:text-3xl font-semibold text-neutral-50 mb-6">{text}</h2>;
        //         break;
        //     case 'heading-five':
        //         modifiedText = <h5 key={index} className="text-sm lg:text-lg font-semibold text-neutral-50 mb-4">{text}</h5>;
        //         break;
        //     case 'list-item':
        //         modifiedText = <li key={index} className="mb-2">{text}</li>;
        //         break;
        //     case 'bulleted-list':
        //         modifiedText = <ul key={index} className="list-disc pl-4 mb-4">{text}</ul>;
        //         break;
        //     case 'blockquote':
        //         modifiedText = <blockquote key={index} className="text-neutral-200 border-l-4 border-neutral-200 pl-4 mb-4">{text}</blockquote>;
        //         break;
        //     case 'code':
        //         modifiedText = <CodeBlock key={index} language={object?.lang} code={text} />;
        //         break;
        //     case 'inlineCode':
        //         modifiedText = <code key={index} className="bg-neutral-800 text-neutral-50 px-2 py-1 rounded-md">{text}</code>;
        //         break;
        //     case 'paragraph':
        //         modifiedText = <p key={index} className="mb-4">{text}</p>;
        //         break;
        //     case 'image':
        //         modifiedText = <img key={index} src={object?.url} alt={object?.alt} />;
        //         break;
        //     // Add other cases as needed
        //     default:
        //         return (
        //             <p key={index} className="mb-4 text-neutral-300">
        //                 {modifiedText}
        //             </p>
        //         );
        // };
        switch (type) {
            case 'heading-one':
                return <h1 key={index} className="text-2xl lg:text-4xl font-semibold mb-8">{modifiedText.map((item: any, i: any) => <React.Fragment key={i}>
                    {item}
                </React.Fragment>)}
                </h1>
            case 'heading-two':
                return <h2 key={index} className="text-xl font-semibold my-4 mt-8">{modifiedText.map((item: any, i: any) => <React.Fragment key={i}>
                    {item}
                </React.Fragment>)}
                </h2>
            case 'heading-four':
                return <h4 key={index} className='text-xl font-semibold mb-4 mt-8'>
                    {modifiedText}
                </h4>
            case 'bulleted-list':
                return <ul key={index} className="list-disc pl-4 mb-4">
                    {modifiedText.map((item: any, i: any) => <React.Fragment key={i}>
                        {item}
                    </React.Fragment>)}
                </ul>
            case 'list-item':
                return <li key={index} className="mb-2">
                    {modifiedText.map((item: any, i: any) => <React.Fragment key={i}>
                        {item}
                    </React.Fragment>)}
                </li>
            case 'list-item-child':
                return <li key={index} className="mb-2">
                    {modifiedText.map((item: any, i: any) => <React.Fragment key={i}>
                        {item}
                    </React.Fragment>)}
                </li>
            case 'paragraph':
                return <p key={index} className="text-gray-700 font-medium my-4">
                    {modifiedText.map((item: any, i: any) =>
                        <React.Fragment key={i}>
                            {item}
                        </React.Fragment>)
                    }
                </p>;
            case 'code-block':
                return (
                    <code key={index} className=' font-normal my-4 px-4 py-1 rounded-md'>
                        {modifiedText.map((item: any, i: any) => <React.Fragment key={i}  >
                            {/* <SyntaxHighlighter language="javascript" style={atomDark}> */}
                            {item}
                            {/* </SyntaxHighlighter> */}
                        </React.Fragment>)}
                    </code>
                )
            case 'code':
                return (
                    <>
                        {modifiedText.map((item: any, i: any) => <React.Fragment key={i}>
                            <code key={index} className=' font-normal my-4 px-4 py-1 rounded-md font-mono'>
                                {/* <SyntaxHighlighter language="javascript"> */}
                                {item}
                                {/* </SyntaxHighlighter> */}
                            </code>
                        </React.Fragment>)}
                    </>
                )
            default:
                return modifiedText;
        }
    };

    const getContentFragment3 = (index: any, text: any, obj: any, type: any) => {
        let modifiedText: any = text;

        if (obj) {
            if (obj.bold) {
                modifiedText = (<b key={index}>{text}</b>);
            }
            if (obj.underline) {
                modifiedText = (<u key={index}>{text}</u>);
            }
        }
        // console.log('modifiedText starting', modifiedText);

        switch (type) {
            case 'heading-one':
                return <h1 key={index} className="text-2xl lg:text-4xl font-semibold mb-8">{modifiedText}</h1>;
            case 'heading-two':
                return <h2 key={index} className="text-xl font-semibold my-4 mt-8">{modifiedText}</h2>;
            case 'heading-four':
                return <h4 key={index} className='text-xl font-semibold mb-4 mt-8'>{modifiedText}</h4>;
            case 'bulleted-list':
                // console.log('modifiedText from ul', modifiedText);
                return (
                    <ul key={index} className="list-disc pl-4 mb-4">
                        {modifiedText}
                    </ul>
                )
            case 'list-item':
            case 'list-item-child':
                return <li key={index} className="mb-2">{modifiedText}</li>;
            case 'paragraph':
                return <p key={index} className="font-medium my-4">{modifiedText}</p>;
            case 'code-block':
                return (
                    <code key={index} className='font-normal my-4 px-4 py-1 rounded-md'>
                        {/* <SyntaxHighlighter language="javascript" style={atomDark}> */}
                        {modifiedText}
                        {/* </SyntaxHighlighter> */}
                    </code>
                );
            case 'code':
                return (
                    <code key={index} className='font-normal my-4 px-4 py-1 rounded-md font-mono'>
                        {/* <SyntaxHighlighter language="javascript"> */}
                        {modifiedText}
                        {/* </SyntaxHighlighter> */}
                    </code>
                );
            default:
                return modifiedText;
        }
    };

    const getContentFragment = (index: any, text: any, obj: any, type: any) => {
        let modifiedText = text;

        if (obj) {
            if (obj.bold) {
                modifiedText = (<b key={index}>{text}</b>);
            }
            if (obj.underline) {
                modifiedText = (<u key={index}>{text}</u>);
            }
            if (obj.italic) {
                modifiedText = (<i key={index}>{text}</i>);
            }
        }

        switch (type) {
            case 'heading-one':
                return (
                    <h1 key={index} className="text-2xl lg:text-4xl font-semibold mb-8">
                        {modifiedText}
                    </h1>
                );
            case 'heading-two':
                return (
                    <h2 key={index} className="text-xl font-semibold my-4 mt-8">
                        {modifiedText}
                    </h2>
                );
            case 'heading-four':
                return (
                    <h4 key={index} className='text-xl font-semibold mb-4 mt-8'>
                        {modifiedText}
                    </h4>
                );
            case 'bulleted-list':
                return (
                    <ul key={index} className="list-disc pl-4 mb-4">
                        {modifiedText}
                    </ul>
                );
            case 'list-item':
                return (
                    <li key={index} className="mb-2">
                        {modifiedText}
                    </li>
                );
            case 'list-item-child':
                return (
                    <li key={index} className="mb-2">
                        {modifiedText}
                    </li>
                );
            case 'paragraph':
                return (
                    <p key={index} className="font-medium my-4">
                        {modifiedText}
                    </p>
                );
            case 'code-block':
                return (
                    <code key={index} className='font-normal my-4 px-4 py-1 rounded-md'>
                        {modifiedText}
                    </code>
                );
            case 'code':
                return (
                    <code key={index} className='font-normal my-4 px-4 py-1 rounded-md font-mono'>
                        {modifiedText}
                    </code>
                );
            default:
                return modifiedText;
        }
    };


    return (
        <div className="mb-8 lg:py-8 lg:pb-16 w-full pb-12">
            <div className="px-4 lg:px-0 text-neutral-200">
                {blog?.content.raw.children?.map((typeObj: any, index: any) => {
                    const children = typeObj.children?.map((item: any, itemIndex: any) => getContentFragment(itemIndex, item.text, item, ''));

                    return getContentFragment(index, children, typeObj, typeObj.type);
                })}
            </div>
        </div>
    )
};

export default MarkdownRenderer;
