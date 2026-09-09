export type ProjectEpicsRuleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectEpicsRuleStateMachine {
  private allowedTransitions: Record<ProjectEpicsRuleState, ProjectEpicsRuleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectEpicsRuleState, to: ProjectEpicsRuleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectEpicsRuleState, to: ProjectEpicsRuleState): ProjectEpicsRuleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectEpicsRule: " + from + " -> " + to);
    }
    return to;
  }
}
