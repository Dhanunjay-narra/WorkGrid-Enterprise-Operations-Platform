export type CrmDealsThresholdState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmDealsThresholdStateMachine {
  private allowedTransitions: Record<CrmDealsThresholdState, CrmDealsThresholdState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmDealsThresholdState, to: CrmDealsThresholdState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmDealsThresholdState, to: CrmDealsThresholdState): CrmDealsThresholdState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmDealsThreshold: " + from + " -> " + to);
    }
    return to;
  }
}
