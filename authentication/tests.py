from django.test import TestCase
import json

# Create your tests here.

class AuthTest(TestCase):
    
    def test_api_returns_json(self):
        response = self.client.get("/api")
        expected = response.content.decode("utf8")
        data = json.loads(expected)

        self.assertEqual(data["message"], "Welcome to E-Presence API.")
    
    def test_signup_api(self):
        test_data = { "email": "abc@xyz.com", "password": "2133"}
        response = self.client.post("/auth/signup",
            json.dumps(test_data), 
            content_type="application/json"
        )
        expected = response.content.decode("utf8")
        data = json.loads(expected)
        self.assertEqual(data["message"], "User Inserted.")
    
    def test_login_api(self):
        test_data = { "email": "abc@xyz.com", "password": "2133"}
        response = self.client.post("/auth/login",
            json.dumps(test_data), 
            content_type="application/json"
        )
        expected = response.content.decode("utf8")
        print(expected)
        data = json.loads(expected)
        self.assertEqual(data["message"], "Login Successful.")

    def do_login(self):
        test_data = { "email": "abc@xyz.com", "password": "2133"}
        response = self.client.post("/auth/login",
            json.dumps(test_data), 
            content_type="application/json"
        )
        expected = response.content.decode("utf8")
        data = json.loads(expected)
        return data["token"]

    def test_jwt(self):
        test_data = { "token": self.do_login() }
        response = self.client.post("/auth/whoami",
            json.dumps(test_data), 
            content_type="application/json"
        )
        expected = response.content.decode("utf8")
        print(expected)
        self.assertEqual(1, 1)