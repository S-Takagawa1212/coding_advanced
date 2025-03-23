
type props={
  title:string,
  covidMeasuresList:string[];
};

export default function CovidDetail({title,covidMeasuresList}:props){

  return (
    <>
      <h2>◾️{title}</h2>
      {covidMeasuresList.map((covidMeasure,index)=>{
        return <p key={index}>・{covidMeasure}</p>
        })
      }
    </>
    );

};
