export type ProjectSprintsRuleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectSprintsRuleStateMachine {
  private allowedTransitions: Record<ProjectSprintsRuleState, ProjectSprintsRuleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectSprintsRuleState, to: ProjectSprintsRuleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectSprintsRuleState, to: ProjectSprintsRuleState): ProjectSprintsRuleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectSprintsRule: " + from + " -> " + to);
    }
    return to;
  }
}
