export type CrmLeadsProfileState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmLeadsProfileStateMachine {
  private allowedTransitions: Record<CrmLeadsProfileState, CrmLeadsProfileState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmLeadsProfileState, to: CrmLeadsProfileState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmLeadsProfileState, to: CrmLeadsProfileState): CrmLeadsProfileState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmLeadsProfile: " + from + " -> " + to);
    }
    return to;
  }
}
