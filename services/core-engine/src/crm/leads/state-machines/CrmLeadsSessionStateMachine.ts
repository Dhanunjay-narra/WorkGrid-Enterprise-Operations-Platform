export type CrmLeadsSessionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmLeadsSessionStateMachine {
  private allowedTransitions: Record<CrmLeadsSessionState, CrmLeadsSessionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmLeadsSessionState, to: CrmLeadsSessionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmLeadsSessionState, to: CrmLeadsSessionState): CrmLeadsSessionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmLeadsSession: " + from + " -> " + to);
    }
    return to;
  }
}
