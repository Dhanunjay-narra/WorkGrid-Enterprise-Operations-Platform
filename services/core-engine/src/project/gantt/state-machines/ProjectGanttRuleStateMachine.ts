export type ProjectGanttRuleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectGanttRuleStateMachine {
  private allowedTransitions: Record<ProjectGanttRuleState, ProjectGanttRuleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectGanttRuleState, to: ProjectGanttRuleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectGanttRuleState, to: ProjectGanttRuleState): ProjectGanttRuleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectGanttRule: " + from + " -> " + to);
    }
    return to;
  }
}
