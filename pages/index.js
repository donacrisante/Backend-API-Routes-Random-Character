import useSWR from "swr";

export default function HomePage() {

  const { data, isLoading } = useSWR("/api/random-character");

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return <div>Hallo!</div>;
  }
  
  return (
    <>
      <h1>First Name: {data.firstName}</h1>
      <h2>Last Name: {data.lastName} </h2>
      <p>Age: {data.age}</p>
      <p>Country: {data.country}</p>
      <p>Profession: {data.profession}</p>
      <p>Twitter: {data.twitter}</p>
      <p>Geohash: {data.geohash}</p>
    </>
  );
}
