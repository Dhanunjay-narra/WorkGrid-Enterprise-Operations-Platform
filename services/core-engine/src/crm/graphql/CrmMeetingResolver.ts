export const CrmMeetingTypeDefs = `
  type CrmMeeting {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getCrmMeeting(id: ID!): CrmMeeting
    listCrmMeetings(tenantId: String!): [CrmMeeting!]!
  }
`;

export const CrmMeetingResolvers = {
  Query: {
    getCrmMeeting: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "CrmMeeting", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listCrmMeetings: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "CrmMeeting", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
