import React, { useState } from "react";
import Spinner from "../Components/Spinner";
import Alert from "../Components/Alert";
import Film from "../Components/Film";
import { useFetch } from "../Hooks/useFetch";
import SearchForm from "../Components/SearchForm";

const Home = () => {
  const [params, setparam] = useState({});
  const { films, loading, error } = useFetch(params);

  const handleparamchange = (e) => {
    let param = e.target.name;
    let value = e.target.value;
    setparam((prevparams) => {
      return { ...prevparams, [param]: value };
    });
  };

  return (
    <div>
      <SearchForm handleparamchange={handleparamchange} params={params} />
      <div className="px-2">
        {loading && <Spinner />}
        {error && <Alert reason={error} />}
        {films.length <= 0 && !loading ? (
          <div className="flex items-center justify-center mt-3 text-lg text-red-500 animate-pulse">
            No result found....
          </div>
        ) : (
          ""
        )}
        {films &&
          films.map((film, index) => (
            <Film key={index} film={film} id={index + 1} />
          ))}
      </div>
    </div>
  );
};

export default Home;
