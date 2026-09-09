export const IntAdapterTelemetryMutationTypeDefs = `
  input CreateIntAdapterTelemetryInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createIntAdapterTelemetry(input: CreateIntAdapterTelemetryInput!): IntAdapterTelemetry!
    deleteIntAdapterTelemetry(id: ID!): Boolean!
  }
`;

export const IntAdapterTelemetryMutationResolvers = {
  Mutation: {
    createIntAdapterTelemetry: async (_: any, args: { input: any }) => {
      return {
        id: "int_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteIntAdapterTelemetry: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
