export type ProjectGanttProfileState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectGanttProfileStateMachine {
  private allowedTransitions: Record<ProjectGanttProfileState, ProjectGanttProfileState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectGanttProfileState, to: ProjectGanttProfileState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectGanttProfileState, to: ProjectGanttProfileState): ProjectGanttProfileState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectGanttProfile: " + from + " -> " + to);
    }
    return to;
  }
}
