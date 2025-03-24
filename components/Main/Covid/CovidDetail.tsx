
type props={
  id:string;
  title:string,
  covidMeasuresList:string[];
};

export default function CovidDetail({id,title,covidMeasuresList}:props){

  return (
    <>
      <h2>◾️{title}</h2>
      {covidMeasuresList.map((covidMeasure,index)=>{
        return <li key={`${id}`+`${index}`}>・{covidMeasure}</li>
        })
      }
    </>
    );

};
