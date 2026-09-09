export const HrJobPostingTypeDefs = `
  type HrJobPosting {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getHrJobPosting(id: ID!): HrJobPosting
    listHrJobPostings(tenantId: String!): [HrJobPosting!]!
  }
`;

export const HrJobPostingResolvers = {
  Query: {
    getHrJobPosting: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "HrJobPosting", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listHrJobPostings: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "HrJobPosting", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
