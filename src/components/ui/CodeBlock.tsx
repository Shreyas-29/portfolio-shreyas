import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface Props {
    language: string;
    code: string;
}

const CodeBlock = ({ language, code }: Props) => {
    return (
        <SyntaxHighlighter language={language} style={vscDarkPlus}>
            {code}
        </SyntaxHighlighter>
    );
};

export default CodeBlock;
