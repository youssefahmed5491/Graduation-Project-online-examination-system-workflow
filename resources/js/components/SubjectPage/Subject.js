import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";

import axios from "axios";
import { set } from "react-hook-form";
import { sum } from "lodash";

//axios.get(`/api/subjects/${subjects}`).then((response)=>{console.log(response.data)})
// defaults.global.tooltips.enabled = false;
// defaults.global.legend.position = "bottom";

const Subject = () => {
    const [grades , setGrades] = useState([]);
   
    axios
        .get("api/subjects/1/grading")
        .then(res => {
             
           setGrades(res.data);
           
          })
         ///////////////////
         let average=0.0;
         let diff = 0.0;
          let grades_sum=0;
          let count1=0;
          let count2=0;
          let count3=0;
          let count4=0;
          let count5=0;
        //   if($data)
        //    $grades = $data;
              
              for(var i=0 ; i<grades.length ; i++) {
                grades_sum= grades + grades_sum;
              if (grades[i]<11)
              {count1=count1+1;}
              else if (grades[i]<21)
              {count2=count2+1;}
              else if (grades[i]<31)
              {count3=count3+1;}
              else if (grades[i]<41)
              {count4=count4+1;}
              else if (grades[i]<51)
              {count5=count5+1;}
          }
          let student_category=[];
          student_category.push(count1);
          student_category.push(count2);
          student_category.push(count3);
          student_category.push(count4);
          student_category.push(count5);

        //   //////////////////////
        //   average = grades_sum/grades.length;
        //   diff = 1/100 *average;
        //   if (diff>0.75)
        //   {diff_idex=easy;}
        //   else if(diff<0.45)
        //   {diff_idex=diffcult;}
        //   else
        //   {diff_idex=median;}  
          
        //    //setstudent_category(student_category);
        //  console.log(diff);
        //  console.log(diff_idex);

    return (
        <div>
            {student_category.length !=0 &&        <Bar
                data={{
                    labels: [
                        "0-10",
                        "10-20",
                        "20-30",
                        "30-40",
                        "40-50",                    
                    ],
                    datasets: [
                        {
                            label: " students scores ",
                            data: student_category,
                            backgroundColor: [
                                "rgba(255, 99, 132, 0.2)",
                                "rgba(54, 162, 235, 0.2)",
                                "rgba(255, 206, 86, 0.2)",
                                "rgba(75, 192, 192, 0.2)",
                                "rgba(153, 102, 255, 0.2)",
                                "rgba(255, 159, 64, 0.2)",
                            ],
                            borderColor: [
                                "rgba(255, 99, 132, 1)",
                                "rgba(54, 162, 235, 1)",
                                "rgba(255, 206, 86, 1)",
                                "rgba(75, 192, 192, 1)",
                                "rgba(153, 102, 255, 1)",
                                "rgba(255, 159, 64, 1)",
                            ],
                            borderWidth: 1,
                        },
                    ],
                }}
                height={100}
                width={300}
            ></Bar>}
     
        </div>
    );
};

export default Subject;