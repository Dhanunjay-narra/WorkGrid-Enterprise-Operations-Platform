export const EvtDomainEventSchemaMutationTypeDefs = `
  input CreateEvtDomainEventSchemaInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createEvtDomainEventSchema(input: CreateEvtDomainEventSchemaInput!): EvtDomainEventSchema!
    deleteEvtDomainEventSchema(id: ID!): Boolean!
  }
`;

export const EvtDomainEventSchemaMutationResolvers = {
  Mutation: {
    createEvtDomainEventSchema: async (_: any, args: { input: any }) => {
      return {
        id: "eve_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteEvtDomainEventSchema: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
