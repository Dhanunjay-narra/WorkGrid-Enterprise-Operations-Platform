export const CommBroadcastAnnouncementTypeDefs = `
  type CommBroadcastAnnouncement {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getCommBroadcastAnnouncement(id: ID!): CommBroadcastAnnouncement
    listCommBroadcastAnnouncements(tenantId: String!): [CommBroadcastAnnouncement!]!
  }
`;

export const CommBroadcastAnnouncementResolvers = {
  Query: {
    getCommBroadcastAnnouncement: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "CommBroadcastAnnouncement", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listCommBroadcastAnnouncements: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "CommBroadcastAnnouncement", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
