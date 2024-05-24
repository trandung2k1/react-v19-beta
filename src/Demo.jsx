// Not using forward ref
// eslint-disable-next-line react/prop-types
const Demo = ({ placeholder, ref }) => {
    // using react compiler
    'use memo';
    return <input placeholder={placeholder} ref={ref} />;
    // return (
    //     <a
    //         ref={(ref) => {
    //             console.log(ref);
    //             return () => {
    //                 ref.setAttribute('href', 'https://www.w3schools.com');
    //             };
    //         }}
    //     >
    //         Visit W3Schools.com!
    //     </a>
    // );
};
export default Demo;
