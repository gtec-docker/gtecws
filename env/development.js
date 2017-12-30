module.exports = {
		  user          : "gtec",

		  // Instead of hard coding the password, consider prompting for it,
		  // passing it in an environment variable via process.env, or using
		  // External Authentication.
		  password      : "gtec",

		  // For information on connection strings see:
		  host : "172.17.0.3",
		  database: "testDb",

		  // Setting externalAuth is optional. It defaults to false.  See:
		  // https://github.com/oracle/node-oracledb/blob/master/doc/api.md#extauth
				  http: {
					  port: 3000
				  },
				  api_version: "1"
		};
