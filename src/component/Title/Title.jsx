/* eslint-disable react/prop-types */


const Title = ({subTitle, title, bar}) => {
    return (
        <div className="space-y-3">
            {
                subTitle && 
                <p className="small-text">{subTitle}</p>
            }

            {
                bar === '' && 
                <div className="bar"></div>
                
            }

            {
                title &&
                <h2>{title}</h2>
            }
        </div>
    );
};

export default Title;