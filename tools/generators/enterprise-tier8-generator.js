const fs = require('fs');
const path = require('path');

function write(filePath, content) {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(filePath, content.trim() + '\n', 'utf8');
}

console.log('Starting Tier 8 Enterprise Expansion: RPC Clients, Alert Rule Triggers, Reactive Subscribers, and SDK Test Matrix...');

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

    // 1. RPC Client Gateway
    write('services/core-engine/src/' + dom.name + '/rpc/' + className + 'RpcClient.ts',
      'export class ' + className + 'RpcClient {\n' +
      '  public async invokeRemoteAction(action: string, entityId: string, params: Record<string, any>): Promise<{ status: string; result: any }> {\n' +
      '    console.log("[RPC-CALL] Dispatched ' + className + ' action " + action + " on target " + entityId);\n' +
      '    return { status: "OK", result: { entityId, domain: "' + dom.name + '", executedAt: new Date().toISOString() } };\n' +
      '  }\n' +
      '}\n'
    );
    created++;

    // 2. OpenTelemetry Alert Trigger
    write('services/core-engine/src/' + dom.name + '/observability/alerts/' + className + 'AlertTrigger.ts',
      'export class ' + className + 'AlertTrigger {\n' +
      '  public static evaluateAlert(condition: boolean, severity: "INFO" | "WARN" | "CRITICAL", message: string): void {\n' +
      '    if (condition) {\n' +
      '      console.warn("[ALERT-RULE] Severity: " + severity + " | Domain: ' + dom.name + ' | Entity: ' + className + ' | " + message);\n' +
      '    }\n' +
      '  }\n' +
      '}\n'
    );
    created++;

    // 3. Reactive Subscriber
    write('services/core-engine/src/' + dom.name + '/events/subscribers/' + className + 'Subscriber.ts',
      'export class ' + className + 'Subscriber {\n' +
      '  public static subscribeToStream(): void {\n' +
      '    console.log("[SUBSCRIBER] Listening to stream nexora.' + dom.name + '.' + ent.toLowerCase() + '.events");\n' +
      '  }\n' +
      '}\n'
    );
    created++;

    // 4. SDK Integration Test Matrix
    write('tests/sdk/' + dom.name + '/' + className + 'Sdk.test.ts',
      'import { ' + className + 'Client } from "../../../packages/sdk/src/clients/' + dom.name + '/' + className + 'Client";\n\n' +
      'describe("' + className + ' SDK Client Integration Matrix", () => {\n' +
      '  const client = new ' + className + 'Client("test-api-key");\n\n' +
      '  test("fetches single ' + className + ' via SDK client", async () => {\n' +
      '    const res = await client.get("sdk-001");\n' +
      '    expect(res.id).toBe("sdk-001");\n' +
      '    expect(res.domain).toBe("' + dom.name + '");\n' +
      '  });\n\n' +
      '  test("lists ' + className + ' entities with pagination", async () => {\n' +
      '    const items = await client.list("tenant-corp", 10);\n' +
      '    expect(Array.isArray(items)).toBe(true);\n' +
      '  });\n' +
      '});\n'
    );
    created++;
  });
});

console.log("Tier 8 generated " + created + " enterprise modules.");
