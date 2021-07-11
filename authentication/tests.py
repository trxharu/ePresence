from django.test import TestCase
import json

# Create your tests here.

class AuthTest(TestCase):    
    def test_login_api(self):
        test_data = { "email": "suryasharma400@gmail.com", "password": "21332133"}
        response = self.client.post("/auth/login",
            json.dumps(test_data), 
            content_type="application/json"
        )
        expected = response.content.decode("utf-8")
        print(expected)
        data = json.loads(expected)
        self.assertEqual(data["message"], "Login Successful.")
