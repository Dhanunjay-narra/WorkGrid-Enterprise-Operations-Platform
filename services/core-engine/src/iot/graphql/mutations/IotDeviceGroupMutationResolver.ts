export const IotDeviceGroupMutationTypeDefs = `
  input CreateIotDeviceGroupInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createIotDeviceGroup(input: CreateIotDeviceGroupInput!): IotDeviceGroup!
    deleteIotDeviceGroup(id: ID!): Boolean!
  }
`;

export const IotDeviceGroupMutationResolvers = {
  Mutation: {
    createIotDeviceGroup: async (_: any, args: { input: any }) => {
      return {
        id: "iot_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteIotDeviceGroup: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
