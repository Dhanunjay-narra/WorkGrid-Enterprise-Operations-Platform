export const IotHeartbeatRecordMutationTypeDefs = `
  input CreateIotHeartbeatRecordInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createIotHeartbeatRecord(input: CreateIotHeartbeatRecordInput!): IotHeartbeatRecord!
    deleteIotHeartbeatRecord(id: ID!): Boolean!
  }
`;

export const IotHeartbeatRecordMutationResolvers = {
  Mutation: {
    createIotHeartbeatRecord: async (_: any, args: { input: any }) => {
      return {
        id: "iot_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteIotHeartbeatRecord: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
