export type CrmDealsProfileState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmDealsProfileStateMachine {
  private allowedTransitions: Record<CrmDealsProfileState, CrmDealsProfileState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmDealsProfileState, to: CrmDealsProfileState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmDealsProfileState, to: CrmDealsProfileState): CrmDealsProfileState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmDealsProfile: " + from + " -> " + to);
    }
    return to;
  }
}
