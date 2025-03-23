
type props={
  id:string;
  title:string,
  covidMeasuresList:string[];
};

export default function CovidDetail({id,title,covidMeasuresList}:props){

  return (
    <>
      <h2>◾️{title}</h2>
      {covidMeasuresList.map((covidMeasure)=>{
        return <li key={id}>・{covidMeasure}</li>
        })
      }
    </>
    );

};
