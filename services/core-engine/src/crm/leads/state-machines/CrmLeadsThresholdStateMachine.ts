export type CrmLeadsThresholdState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmLeadsThresholdStateMachine {
  private allowedTransitions: Record<CrmLeadsThresholdState, CrmLeadsThresholdState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmLeadsThresholdState, to: CrmLeadsThresholdState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmLeadsThresholdState, to: CrmLeadsThresholdState): CrmLeadsThresholdState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmLeadsThreshold: " + from + " -> " + to);
    }
    return to;
  }
}
