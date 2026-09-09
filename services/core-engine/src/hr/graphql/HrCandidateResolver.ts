export const HrCandidateTypeDefs = `
  type HrCandidate {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getHrCandidate(id: ID!): HrCandidate
    listHrCandidates(tenantId: String!): [HrCandidate!]!
  }
`;

export const HrCandidateResolvers = {
  Query: {
    getHrCandidate: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "HrCandidate", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listHrCandidates: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "HrCandidate", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
