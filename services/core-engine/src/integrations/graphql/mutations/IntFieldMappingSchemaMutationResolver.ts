export const IntFieldMappingSchemaMutationTypeDefs = `
  input CreateIntFieldMappingSchemaInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createIntFieldMappingSchema(input: CreateIntFieldMappingSchemaInput!): IntFieldMappingSchema!
    deleteIntFieldMappingSchema(id: ID!): Boolean!
  }
`;

export const IntFieldMappingSchemaMutationResolvers = {
  Mutation: {
    createIntFieldMappingSchema: async (_: any, args: { input: any }) => {
      return {
        id: "int_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteIntFieldMappingSchema: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
