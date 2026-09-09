export const HrLeaveRequestTypeDefs = `
  type HrLeaveRequest {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getHrLeaveRequest(id: ID!): HrLeaveRequest
    listHrLeaveRequests(tenantId: String!): [HrLeaveRequest!]!
  }
`;

export const HrLeaveRequestResolvers = {
  Query: {
    getHrLeaveRequest: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "HrLeaveRequest", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listHrLeaveRequests: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "HrLeaveRequest", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
