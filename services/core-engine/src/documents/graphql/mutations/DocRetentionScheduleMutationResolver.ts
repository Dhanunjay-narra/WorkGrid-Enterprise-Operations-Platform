export const DocRetentionScheduleMutationTypeDefs = `
  input CreateDocRetentionScheduleInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createDocRetentionSchedule(input: CreateDocRetentionScheduleInput!): DocRetentionSchedule!
    deleteDocRetentionSchedule(id: ID!): Boolean!
  }
`;

export const DocRetentionScheduleMutationResolvers = {
  Mutation: {
    createDocRetentionSchedule: async (_: any, args: { input: any }) => {
      return {
        id: "doc_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteDocRetentionSchedule: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
