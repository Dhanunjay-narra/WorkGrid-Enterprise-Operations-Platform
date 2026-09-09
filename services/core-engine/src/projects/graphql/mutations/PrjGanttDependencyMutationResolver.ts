export const PrjGanttDependencyMutationTypeDefs = `
  input CreatePrjGanttDependencyInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createPrjGanttDependency(input: CreatePrjGanttDependencyInput!): PrjGanttDependency!
    deletePrjGanttDependency(id: ID!): Boolean!
  }
`;

export const PrjGanttDependencyMutationResolvers = {
  Mutation: {
    createPrjGanttDependency: async (_: any, args: { input: any }) => {
      return {
        id: "pro_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deletePrjGanttDependency: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
