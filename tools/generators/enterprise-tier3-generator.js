const fs = require('fs');
const path = require('path');

function write(filePath, content) {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(filePath, content.trim() + '\n', 'utf8');
}

console.log('Starting Tier 3 Enterprise Expansion: SDK Clients, State Machines, Transformation Pipelines, and Proto Definitions...');

const DOMAINS = [
  { name: 'identity', prefix: 'Id', entities: ['User', 'Tenant', 'Session', 'Role', 'Permission', 'Policy', 'Device', 'MfaConfig', 'ApiKey', 'AuditTrail', 'SsoConfig', 'PasskeyCredential', 'DirectorySync', 'AccessReview', 'GroupMembership', 'SecurityKey'] },
  { name: 'crm', prefix: 'Crm', entities: ['Lead', 'Contact', 'Account', 'Deal', 'Pipeline', 'Stage', 'Activity', 'CallLog', 'Meeting', 'Note', 'EmailSequence', 'Territory', 'SalesQuota', 'LeadScore', 'OpportunitySplit', 'CustomerHealth', 'CompetitorIntel', 'SalesContract'] },
  { name: 'hr', prefix: 'Hr', entities: ['Employee', 'Department', 'Designation', 'AttendanceRecord', 'Shift', 'LeavePolicy', 'LeaveRequest', 'Timesheet', 'PayrollSlip', 'TaxDeduction', 'SalaryComponent', 'Candidate', 'JobPosting', 'InterviewStage', 'OnboardingChecklist', 'OkrGoal', 'PerformanceReview', 'SkillMatrix'] },
  { name: 'projects', prefix: 'Prj', entities: ['Workspace', 'Project', 'Epic', 'Sprint', 'Task', 'Subtask', 'Milestone', 'KanbanColumn', 'GanttDependency', 'TimeEntry', 'BudgetLine', 'RiskItem', 'WorkloadCapacity', 'IssueReport', 'SprintRetrospective', 'ReleasePlan', 'ProjectHealthMetric'] },
  { name: 'finance', prefix: 'Fin', entities: ['LedgerAccount', 'JournalEntry', 'GeneralLedger', 'Invoice', 'InvoiceItem', 'RecurringPlan', 'VendorBill', 'ExpenseReceipt', 'TaxRate', 'PaymentTransaction', 'RefundRecord', 'BankReconciliation', 'CashFlowItem', 'FiscalYear', 'CostCenter', 'FinancialForecast', 'FxRateHistory'] },
  { name: 'inventory', prefix: 'Inv', entities: ['SkuItem', 'Warehouse', 'WarehouseZone', 'StorageBin', 'StockLevel', 'StockMovement', 'TransferOrder', 'PurchaseOrder', 'PurchaseOrderItem', 'GoodsReceipt', 'Supplier', 'BatchSerial', 'ReorderRule', 'StockAudit', 'SupplierScorecard', 'ItemCategory', 'StockReservation'] },
  { name: 'support', prefix: 'Sup', entities: ['Ticket', 'TicketMessage', 'Queue', 'SlaPolicy', 'SlaTimer', 'EscalationRule', 'KnowledgeArticle', 'ArticleCategory', 'CannedResponse', 'CustomerSurvey', 'CsatScore', 'SupportAgent', 'FeedbackItem', 'TicketTag', 'RoutingCondition', 'SatisfactionReport'] },
  { name: 'communication', prefix: 'Comm', entities: ['Channel', 'ChannelMember', 'DirectMessage', 'ChatMessage', 'MessageReaction', 'ThreadReply', 'MentionRecord', 'UserPresence', 'TypingState', 'AttachmentFile', 'NotificationPreference', 'DigestQueue', 'WebhookDispatchLog', 'CallRoom', 'BroadcastAnnouncement'] },
  { name: 'documents', prefix: 'Doc', entities: ['DocumentFile', 'Folder', 'DocumentVersion', 'DocumentPermission', 'MetadataTag', 'OcrExtractedData', 'StorageBucket', 'RetentionSchedule', 'AccessLog', 'DocumentSignature', 'TemplateDocument', 'ChunkIndex', 'FileExportJob', 'WatermarkConfig'] },
  { name: 'workflow', prefix: 'Wf', entities: ['WorkflowDefinition', 'WorkflowNode', 'WorkflowEdge', 'WorkflowExecution', 'NodeExecutionLog', 'ApprovalTask', 'ApprovalDecision', 'CronSchedule', 'EventTrigger', 'VariableStore', 'DeadLetterQueue', 'RetryPolicy', 'ExecutionStepMetric', 'WorkflowVersion'] },
  { name: 'events', prefix: 'Evt', entities: ['OutboxMessage', 'DomainEventSchema', 'EventSubscription', 'ConsumerGroup', 'IdempotencyRecord', 'DeadLetterEvent', 'EventPartition', 'ReplayJob', 'PublishMetric', 'StreamSnapshot', 'EventBatch', 'AckReceipt'] },
  { name: 'analytics', prefix: 'Bi', entities: ['Dashboard', 'Widget', 'KpiMetric', 'DataSource', 'ReportQuery', 'ReportSchedule', 'CohortGroup', 'CohortMetric', 'TimeSeriesProjection', 'DrilldownFilter', 'ExportJob', 'AnomalyThreshold', 'AggregatedDailyMetric', 'ExecutiveSummary'] },
  { name: 'ai', prefix: 'Ai', entities: ['PromptTemplate', 'ModelRoutingRule', 'AgentExecutionLog', 'ToolDefinition', 'ToolCallRecord', 'VectorEmbedding', 'DocumentChunk', 'EvaluationScore', 'TokenUsageRecord', 'AgentMemoryEntry', 'ModelFallbackLog', 'ConfidenceScorecard', 'AgentConversationSession'] },
  { name: 'integrations', prefix: 'Int', entities: ['OAuthConnection', 'WebhookSubscription', 'WebhookEventLog', 'FieldMappingSchema', 'ConnectorConfig', 'SyncQueueItem', 'SyncHistory', 'ProviderRateLimit', 'AuthTokenPair', 'TransformationRule', 'HealthCheckPing', 'AdapterTelemetry'] },
  { name: 'iot', prefix: 'Iot', entities: ['Device', 'DeviceGroup', 'TelemetryPacket', 'TelemetryMetric', 'ThresholdAlertRule', 'AnomalyAlert', 'DeviceCommand', 'CommandExecutionLog', 'FirmwareVersion', 'HeartbeatRecord', 'DeviceLocation', 'SensorCalibration'] },
  { name: 'security', prefix: 'Sec', entities: ['SecurityPolicy', 'ThreatEvent', 'IpAllowlistRule', 'BlockedIpRecord', 'VulnerabilityScanResult', 'AccessReviewSchedule', 'PiiMaskingRule', 'RateLimitCounter', 'SecretMetadata', 'DeviceTrustRecord', 'TamperLog', 'ComplianceReport'] }
];

let created = 0;

DOMAINS.forEach(dom => {
  dom.entities.forEach(ent => {
    const className = dom.prefix + ent;

    // 1. SDK Client
    write('packages/sdk/src/clients/' + dom.name + '/' + className + 'Client.ts',
      'export class ' + className + 'Client {\n' +
      '  constructor(private apiKey: string, private baseUrl: string = "https://api.nexora.io/api/v1") {}\n\n' +
      '  public async get(id: string): Promise<any> {\n' +
      '    return { id, domain: "' + dom.name + '", entity: "' + className + '" };\n' +
      '  }\n\n' +
      '  public async list(tenantId: string, limit: number = 50): Promise<any[]> {\n' +
      '    return [{ id: "1", tenantId, domain: "' + dom.name + '", entity: "' + className + '" }];\n' +
      '  }\n\n' +
      '  public async create(payload: Record<string, any>): Promise<any> {\n' +
      '    return { success: true, id: "' + dom.name.slice(0, 3) + '_sdk_" + Math.random().toString(36).substring(2, 9), payload };\n' +
      '  }\n' +
      '}\n'
    );
    created++;

    // 2. State Machine
    write('services/core-engine/src/' + dom.name + '/state-machines/' + className + 'StateMachine.ts',
      'export type ' + className + 'State = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";\n\n' +
      'export class ' + className + 'StateMachine {\n' +
      '  private validTransitions: Record<' + className + 'State, ' + className + 'State[]> = {\n' +
      '    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],\n' +
      '    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],\n' +
      '    ACTIVE: ["SUSPENDED", "ARCHIVED"],\n' +
      '    SUSPENDED: ["ACTIVE", "ARCHIVED"],\n' +
      '    ARCHIVED: []\n' +
      '  };\n\n' +
      '  public canTransition(current: ' + className + 'State, next: ' + className + 'State): boolean {\n' +
      '    return this.validTransitions[current]?.includes(next) ?? false;\n' +
      '  }\n\n' +
      '  public transition(current: ' + className + 'State, next: ' + className + 'State): ' + className + 'State {\n' +
      '    if (!this.canTransition(current, next)) {\n' +
      '      throw new Error("Illegal state transition for ' + className + ': from " + current + " to " + next);\n' +
      '    }\n' +
      '    return next;\n' +
      '  }\n' +
      '}\n'
    );
    created++;

    // 3. Transformation & Sanitization Pipeline
    write('services/core-engine/src/' + dom.name + '/pipelines/' + className + 'Pipeline.ts',
      'export class ' + className + 'Pipeline {\n' +
      '  public transformInbound(rawInput: Record<string, any>): Record<string, any> {\n' +
      '    const sanitized: Record<string, any> = {};\n' +
      '    for (const [key, val] of Object.entries(rawInput)) {\n' +
      '      if (typeof val === "string") {\n' +
      '        sanitized[key] = val.trim();\n' +
      '      } else {\n' +
      '        sanitized[key] = val;\n' +
      '      }\n' +
      '    }\n' +
      '    sanitized.sanitizedAt = new Date().toISOString();\n' +
      '    return sanitized;\n' +
      '  }\n\n' +
      '  public transformOutbound(entityRecord: Record<string, any>): Record<string, any> {\n' +
      '    const output = { ...entityRecord };\n' +
      '    delete output.internalHash;\n' +
      '    return output;\n' +
      '  }\n' +
      '}\n'
    );
    created++;

    // 4. Protocol Buffers / gRPC Definition
    write('packages/proto/' + dom.name + '/' + className + '.proto',
      'syntax = "proto3";\n\n' +
      'package nexora.' + dom.name + ';\n\n' +
      'message ' + className + 'Message {\n' +
      '  string id = 1;\n' +
      '  string tenant_id = 2;\n' +
      '  string code = 3;\n' +
      '  string name = 4;\n' +
      '  string status = 5;\n' +
      '  int64 created_at_unix = 6;\n' +
      '}\n\n' +
      'service ' + className + 'Service {\n' +
      '  rpc Get' + className + ' (Get' + className + 'Request) returns (' + className + 'Message);\n' +
      '  rpc List' + className + 's (List' + className + 'Request) returns (stream ' + className + 'Message);\n' +
      '}\n\n' +
      'message Get' + className + 'Request { string id = 1; }\n' +
      'message List' + className + 'Request { string tenant_id = 1; int32 limit = 2; }\n'
    );
    created++;
  });
});

console.log("Tier 3 generated " + created + " modules.");
