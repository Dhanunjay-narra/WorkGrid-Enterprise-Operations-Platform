export const IotDeviceCommandMutationTypeDefs = `
  input CreateIotDeviceCommandInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createIotDeviceCommand(input: CreateIotDeviceCommandInput!): IotDeviceCommand!
    deleteIotDeviceCommand(id: ID!): Boolean!
  }
`;

export const IotDeviceCommandMutationResolvers = {
  Mutation: {
    createIotDeviceCommand: async (_: any, args: { input: any }) => {
      return {
        id: "iot_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteIotDeviceCommand: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
