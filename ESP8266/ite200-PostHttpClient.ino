#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>
#include <WiFiClient.h>

const char *WIFI_SSID = "ssid";
const char *WIFI_PASSWORD = "password";
const char *HOST = "http://<ip>:3000/api";

WiFiClient client;
HTTPClient http;

void setup() {
  Serial.begin(115200);
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("");
  Serial.print("Connected! IP address: ");
  Serial.println(WiFi.localIP());
}


void loop() {
  //konstruera postdata
  const float temp = 24.21;
  const int humid = 45;
  const String postData = "h_temp=" + String(temp) + "&h_humid=" + String(humid);
  
  http.begin(client, HOST);
  http.addHeader("Content-Type", "application/x-www-form-urlencoded");

  int httpCode = http.POST(postData);
  String payload = http.getString();

  Serial.print("HTTP ");
  Serial.println(httpCode);
  Serial.println(payload);

  http.end();
  
  delay(5000);
}
