import React, { useEffect, useState } from "react";
import { supabase } from "./lib/supabase";

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      // ここでデータを取得します
      const { data, error } = await supabase
        .from("power_conditioners")
        .select("*");

      if (error) {
        console.error("読み込みエラー:", error);
      } else {
        setData(data || []);
      }
    }
    fetchData();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>パワーコンディショナー一覧</h1>
      {data.length === 0 ? (
        <p>データが取得できていないか、まだ登録されていません。</p>
      ) : (
        <table border="1" style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ background: "#eee" }}>
              <th style={{ padding: "8px" }}>メーカー</th>
              <th style={{ padding: "8px" }}>型式</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td style={{ padding: "8px" }}>{item.maker}</td>
                <td style={{ padding: "8px" }}>{item.model_name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
