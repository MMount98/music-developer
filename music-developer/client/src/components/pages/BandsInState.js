import React, { useEffect, useState } from "react";
import {useQuery} from "@apollo/client"
import {QUERY_MUSICPROFILES} from "../../utils/queries"

export default function BandsInStatePage() {
  const {loading, data} = useQuery(QUERY_MUSICPROFILES);
  const profiles = data?.profiles || []

  if(!profiles.length) {
    return <h3>No Bands have Signed up in your Area, Spread the word!</h3>
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
      {profiles.map((profile) =>(
        <div key={profile._id} className="card card-side bg-base-200 shadow-xl m-3 flex flex-col justify-between border">
          <h2>{profile.bandName}</h2>
          <img src={profile.bandImage} alt={profile.bandName}/>
          <p>{profile.bandBio}</p>
        </div>
      ))}
    </div>
  );
}