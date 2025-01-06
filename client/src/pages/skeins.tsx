import { useEffect, useState } from "react";
import { Box, Text } from "@chakra-ui/react";
import { SkeinProps, Skein } from "../components/Skeins/skein.tsx";
const Skeins = () => {
  const [skeins, setSkeins] = useState<SkeinProps[]>([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/v1/skeins")
      .then((res) => res.json())
      .then((json) => {
        const skeins: [] = json.data.skeinsWithImageUrl;
        setSkeins(skeins);
      });
  }, []);
  console.log("skeins", skeins);
  //   console.log("id", skeins[0]._id, skeins[1]._id);
  return (
    <div className="container">
      <h1>My Yarn</h1>
      {skeins &&
        skeins.map((skein, i) => (
          <Skein key={i} _doc={skein._doc} imageUrl={skein.imageUrl} />
        ))}
    </div>
  );
};

export default Skeins;
