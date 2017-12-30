module.exports = {
		  user          : process.env.NODE_ORACLEDB_USER || "CC",

		  // Instead of hard coding the password, consider prompting for it,
		  // passing it in an environment variable via process.env, or using
		  // External Authentication.
		  password      : process.env.NODE_ORACLEDB_PASSWORD || "smart",

		  // For information on connection strings see:
		  connectString : process.env.NODE_ORACLEDB_CONNECTIONSTRING || "10.1.8.18:1521/cc",

		  // Setting externalAuth is optional. It defaults to false.  See:
		  // https://github.com/oracle/node-oracledb/blob/master/doc/api.md#extauth
		  externalAuth  : process.env.NODE_ORACLEDB_EXTERNALAUTH ? true : false,
				  http: {
					  port: 3000
				  },
				  api_version: "1"
		};
