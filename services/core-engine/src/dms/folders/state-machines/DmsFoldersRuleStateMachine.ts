export type DmsFoldersRuleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsFoldersRuleStateMachine {
  private allowedTransitions: Record<DmsFoldersRuleState, DmsFoldersRuleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsFoldersRuleState, to: DmsFoldersRuleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsFoldersRuleState, to: DmsFoldersRuleState): DmsFoldersRuleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsFoldersRule: " + from + " -> " + to);
    }
    return to;
  }
}
