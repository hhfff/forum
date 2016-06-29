			var LoginName;
			function loginator() {
				document.getElementById("loginBox").setAttribute("style", "display: block");
			}

			function loginXbox() {
				document.getElementById("loginBox").setAttribute("style", "display: none");
			}

			function loginSubmit() {
				if(document.getElementById("loginData").value == "")
				return false;
				if(document.getElementById("loginPW").value == "")
				return false;
				else {
					loginName = document.getElementById("loginData").value;
					document.getElementById("loginWelcome").innerHTML = ("Welcome " + "\"" + loginName + "\"");
					document.getElementById("loginWelcome").setAttribute("style", "display: inline-block");

					document.getElementById("loginButton").setAttribute("style", "display: none");
					document.getElementById("loginBox").setAttribute("style", "display: none");

					document.getElementById("loginLogout").setAttribute("style", "display: inline-block");
					localStorage.setItem("Name", loginName);
					
					document.getElementById("ChatBoxButton").style.display = 'block';
				}
			}

			function loginKeep() {
				loginName = localStorage.getItem('Name');
				document.getElementById("loginWelcome").innerHTML = ("Welcome " + "\"" + loginName + "\"");
				document.getElementById("loginWelcome").setAttribute("style", "display: inline-block");

				document.getElementById("loginBox").setAttribute("style", "display: none");
				document.getElementById("loginButton").setAttribute("style", "display: none");
				document.getElementById("loginLogout").setAttribute("style", "display: inline-block");
				
				document.getElementById("ChatBoxButton").style.display = 'block';
				document.getElementById("ChatBoxWrapper").style.display = 'none';
			}

			function logoutinator() {
				document.getElementById("loginWelcome").innerHTML = "";
				document.getElementById("loginLogout").setAttribute("style", "display: none");
				document.getElementById("loginButton").setAttribute("style", "display: inline-block");
				document.getElementById("loginWelcome").setAttribute("style", "display: none");
				localStorage.clear();
				
				document.getElementById("ChatBoxButton").style.display = 'none';
				document.getElementById("ChatBoxWrapper").style.display = 'none';
			}

			function LoginOnload() {
				if(localStorage.getItem('Name') == null)
					return false;
				else {
					loginKeep();
				}
			}