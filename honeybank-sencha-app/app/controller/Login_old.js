Ext.define('honeybank.controller.Login', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            loginView: 'loginview',
            main: 'main'
        },
        control: {
            loginView: {
                signInCommand: 'onSignInCommand'
            }
            main: {
            signOffCommand: 'onSignOffCommand'
	        }
        }
    }/*,
    
    //Session Token
    sessionToken: null,
    
    onSignInCommand: function (view, username, password) {

    console.log('Username: ' + username + '\n' + 'Password: ' + password);

    var me = this,
        loginView = me.getLoginView();

    if (username.length === 0 || password.length === 0) {

        loginView.showSignInFailedMessage('Please enter your username and password.');
        return;
    }

    loginView.setMasked({
        xtype: 'loadmask',
        message: 'Signing In...'
    });

    Ext.Ajax.request({
        url: '../../services/login.ashx',
        method: 'post',
        params: {
            user: username,
            pwd: password
        },
        success: function (response) {

            var loginResponse = Ext.JSON.decode(response.responseText);

            if (loginResponse.success === "true") {
                // The server will send a token that can be used throughout the app to confirm that the user is authenticated.
                me.sessionToken = loginResponse.sessionToken;
                me.signInSuccess();     //Just simulating success.
            } else {
                me.singInFailure(loginResponse.message);
            }
        },
        failure: function (response) {
            me.sessionToken = null;
            me.singInFailure('Login failed. Please try again later.');
        }
    });
	},
	
	signInSuccess: function () {
	    console.log('Signed in.');
	    var loginView = this.getLoginView();
	    main = this.getMain();
	    loginView.setMasked(false);
	
	    Ext.Viewport.animateActiveItem(main, this.getSlideLeftTransition());
	},
	
	singInFailure: function (message) {
	    var loginView = this.getLoginView();
	    loginView.showSignInFailedMessage(message);
	    loginView.setMasked(false);
	},
	
	getSlideLeftTransition: function () {
	    return { type: 'slide', direction: 'left' };
	},
	
	getSlideRightTransition: function () {
	    return { type: 'slide', direction: 'right' };
	},
	
	onSignOffCommand: function () {

    var me = this;

    Ext.Ajax.request({
        url: '../../services/logoff.ashx',
        method: 'post',
        params: {
            sessionToken: me.sessionToken
        },
        success: function (response) {

            // TODO: Implementation.
        },
        failure: function (response) {

            // TODO: Implementation.
        }
    });

    Ext.Viewport.animateActiveItem(this.getLoginView(), this.getSlideRightTransition());
	}
}*/);