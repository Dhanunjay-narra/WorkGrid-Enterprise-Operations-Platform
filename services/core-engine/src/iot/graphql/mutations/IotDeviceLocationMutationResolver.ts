export const IotDeviceLocationMutationTypeDefs = `
  input CreateIotDeviceLocationInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createIotDeviceLocation(input: CreateIotDeviceLocationInput!): IotDeviceLocation!
    deleteIotDeviceLocation(id: ID!): Boolean!
  }
`;

export const IotDeviceLocationMutationResolvers = {
  Mutation: {
    createIotDeviceLocation: async (_: any, args: { input: any }) => {
      return {
        id: "iot_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteIotDeviceLocation: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
