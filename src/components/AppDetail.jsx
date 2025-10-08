import { Download, Star, ThumbsUp } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // react-router-dom ব্যবহার করতে হবে
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

export default function AppDetail() {
  const { id } = useParams();
  const intId = parseInt(id);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/data.json");
        const resData = await res.json();
        setData(resData);
      } catch (error) {
        console.error("Fetch Error:", error);
      }
    };

    fetchData();
  }, []);

  const filterdataArr = data.filter((d) => d.id === intId);
  const filterData = filterdataArr[0];

  if (!filterData) {
    return <div className="p-10">Loading...</div>;
  }

  const chartData = filterData.ratings;
  const sortedChartData = [...chartData].sort(
    (a, b) => parseInt(b.name) - parseInt(a.name)
  );

  return (
    <div className="p-10 relative">
      <div className="flex flex-col md:flex-row gap-4 py-4">
        <img
          className="h-64 w-64 object-cover"
          src={filterData.image}
          alt={filterData.title}
        />
        <div className="flex flex-col gap-2 flex-1">
          <div>
            <p className="inter md:text-2xl font-bold">{filterData.title}</p>
            <span className="text-gray-500">Developed by </span>
            <span className="text-purple-600 font-extrabold">
              {filterData.companyName}
            </span>
          </div>

          <hr className="text-gray-300 my-2" />

          <div className="flex gap-4 md:gap-8 xl:gap-20">
            <div className="flex flex-col gap-1 items-start">
              <Download className="text-green-500" />
              <div>Downloads</div>
              <div className="text-2xl inter">{filterData.downloads}</div>
            </div>
            <div className="flex flex-col gap-1 items-start">
              <Star className="text-orange-500" />
              <div>Average Ratings</div>
              <div className="text-2xl inter">{filterData.ratingAvg}</div>
            </div>
            <div className="flex flex-col gap-1 items-start">
              <ThumbsUp className="text-purple-500" />
              <div>Total Reviews</div>
              <div className="text-2xl inter">{filterData.reviews}</div>
            </div>
          </div>

          <button className="btn text-white bg-green-400 mt-4 w-max px-4 py-2">
            Install Now ({filterData.size} MB)
          </button>
        </div>
      </div>

      <hr className="text-gray-300 my-4" />

      <div style={{ width: "100%", height: 300 }}>
        <p className="font-bold pl-7">Reatings</p>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={sortedChartData}
            layout="vertical"
            margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
          >
            <YAxis type="category" dataKey="name" stroke="#627382" />

            <XAxis type="number" stroke="#627382" />

            <Tooltip />

            <Bar dataKey="count" fill="#FF8811" barSize={20} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <hr className="text-gray-300 my-4" />
      <div>
        <p className="font-bold">Description</p>
        <p className="text-gray-500">{filterData.description}</p>
      </div>
    </div>
  );
}
