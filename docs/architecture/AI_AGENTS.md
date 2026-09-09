# NEXORA Autonomous 9-Agent Operational Mesh

| Agent | Responsibility | Primary Tools & Domain Triggers |
|---|---|---|
| **Sales Agent** | Lead qualification, deal velocity forecasting | `crm.qualifyLead`, `crm.calculateForecast` |
| **HR Agent** | Attendance anomaly detection, shift optimization | `hr.checkAttendance`, `hr.scheduleShift` |
| **Finance Agent** | Ledger reconciliation, expense OCR auditing | `finance.reconcileLedger`, `finance.auditExpense` |
| **Project Agent** | Critical path calculation, sprint bottleneck triage | `projects.calculateGanttPath`, `projects.balanceLoad` |
| **Support Agent** | Auto-triage, sentiment analysis, SLA prediction | `support.triageTicket`, `support.escalateTicket` |
| **Inventory Agent** | Reorder point calculation, supplier scoring | `inventory.checkStock`, `inventory.triggerPO` |
| **Security Agent** | Zero-trust session review, threat scoring | `security.auditSessions`, `security.blockIP` |
| **Executive Assistant** | Cross-domain KPI summarization, executive queries | `analytics.getEnterpriseKPIs` |
| **Analytics Agent** | Cohort analysis, revenue projections | `analytics.runCohortAnalysis` |
