package utils;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.io.OutputStreamWriter;
import java.net.HttpURLConnection;
import java.net.URL;

import utilidades.Acciones;

public class HTTP {

	public static String get(String ruta) {

		try {
			URL url = new URL(Acciones.HOST + ruta);
			HttpURLConnection con = (HttpURLConnection) url.openConnection();
			con.setRequestMethod("GET");
			return HTTP.execute(con);
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return null;

	}
	
	public static String post(String ruta, String body) {
		
		try {
			URL url = new URL(Acciones.HOST + ruta);
			HttpURLConnection con = (HttpURLConnection) url.openConnection();
			
			con.setRequestMethod("POST");
			con.setRequestProperty("Content-Type", "application/x-www-form-urlencoded");

			
			if (body != null) {
				con.setDoOutput(true);                
                OutputStream os = con.getOutputStream();
                OutputStreamWriter osw = new OutputStreamWriter(os, "UTF-8");    
                osw.write(body);
                osw.flush();
                osw.close();
                os.close();
			}
			
			con.connect();
			
			return execute(con);
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return null;
	}
	
	public static String delete(String ruta) {
		
		try {
			URL url = new URL(Acciones.HOST + ruta);
			HttpURLConnection con = (HttpURLConnection) url.openConnection();
			con.setRequestMethod("DELETE");
			return execute(con);
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return null;
	}
	
	
	public static String execute(HttpURLConnection con) throws Exception {
		
		BufferedReader in = new BufferedReader(new InputStreamReader(con.getInputStream()));
		String inputLine;
		StringBuffer content = new StringBuffer();
		while ((inputLine = in.readLine()) != null) {
			content.append(inputLine);
		}
		in.close();
		
		return content.toString();
	}
}
