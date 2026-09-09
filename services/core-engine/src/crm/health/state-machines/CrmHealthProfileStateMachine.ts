export type CrmHealthProfileState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmHealthProfileStateMachine {
  private allowedTransitions: Record<CrmHealthProfileState, CrmHealthProfileState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmHealthProfileState, to: CrmHealthProfileState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmHealthProfileState, to: CrmHealthProfileState): CrmHealthProfileState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmHealthProfile: " + from + " -> " + to);
    }
    return to;
  }
}
