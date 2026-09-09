export type CrmHealthThresholdState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmHealthThresholdStateMachine {
  private allowedTransitions: Record<CrmHealthThresholdState, CrmHealthThresholdState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmHealthThresholdState, to: CrmHealthThresholdState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmHealthThresholdState, to: CrmHealthThresholdState): CrmHealthThresholdState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmHealthThreshold: " + from + " -> " + to);
    }
    return to;
  }
}
