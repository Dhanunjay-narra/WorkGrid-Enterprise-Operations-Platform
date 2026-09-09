export const IotSensorCalibrationMutationTypeDefs = `
  input CreateIotSensorCalibrationInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createIotSensorCalibration(input: CreateIotSensorCalibrationInput!): IotSensorCalibration!
    deleteIotSensorCalibration(id: ID!): Boolean!
  }
`;

export const IotSensorCalibrationMutationResolvers = {
  Mutation: {
    createIotSensorCalibration: async (_: any, args: { input: any }) => {
      return {
        id: "iot_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteIotSensorCalibration: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
