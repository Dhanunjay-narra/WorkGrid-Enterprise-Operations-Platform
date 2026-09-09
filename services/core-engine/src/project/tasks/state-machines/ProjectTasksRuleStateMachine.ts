export type ProjectTasksRuleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectTasksRuleStateMachine {
  private allowedTransitions: Record<ProjectTasksRuleState, ProjectTasksRuleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectTasksRuleState, to: ProjectTasksRuleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectTasksRuleState, to: ProjectTasksRuleState): ProjectTasksRuleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectTasksRule: " + from + " -> " + to);
    }
    return to;
  }
}
