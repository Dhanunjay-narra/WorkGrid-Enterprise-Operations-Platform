export type CrmContactsMetricState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmContactsMetricStateMachine {
  private allowedTransitions: Record<CrmContactsMetricState, CrmContactsMetricState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmContactsMetricState, to: CrmContactsMetricState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmContactsMetricState, to: CrmContactsMetricState): CrmContactsMetricState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmContactsMetric: " + from + " -> " + to);
    }
    return to;
  }
}
