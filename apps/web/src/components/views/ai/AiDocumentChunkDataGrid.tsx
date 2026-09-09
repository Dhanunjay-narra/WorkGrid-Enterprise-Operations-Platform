import React, { useState } from "react";
import { Card, Badge, Button } from "@nexora/design-system";

export const AiDocumentChunkDataGrid: React.FC<{ tenantId: string }> = ({ tenantId }) => {
  const [selected, setSelected] = useState<string | null>(null);
  return (
    <Card title="AiDocumentChunk Data Grid">
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#E2DFD8]">
        <span className="text-xs text-[#1E2022]/60">Tenant: {tenantId}</span>
        <Badge variant="indigo">Live Stream</Badge>
      </div>
      <p className="text-xs text-[#1E2022]/70">Showing live synchronized telemetry and operations for AiDocumentChunk.</p>
    </Card>
  );
};
